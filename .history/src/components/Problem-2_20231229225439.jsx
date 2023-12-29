import React, { useState, useEffect } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Problem2 = () => {
  const history = useNavigate();

  const [modalAVisible, setModalAVisible] = useState(false);
  const [modalBVisible, setModalBVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyEven, setOnlyEven] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadContacts = async (usOnly, page) => {
    try {
      if (loading) return;

      setLoading(true);

      let apiUrl = `http://localhost:8080/https://contact.mediusware.com/api/contacts/?page=${page}`;

      if (usOnly) {
        apiUrl += "&country=United States";
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results) {
        const filteredData = onlyEven
          ? data.results.filter((contact) => contact.id % 2 === 0)
          : data.results;

        if (page === 1 || usOnly) {
          setContacts(filteredData);
        } else {
          setContacts((prevContacts) => [...prevContacts, ...filteredData]);
        }
      } else {
        console.error("Invalid API response format:", data);
      }
    } catch (error) {
      console.error("Error loading contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts(modalBVisible, currentPage);
  }, [currentPage, modalBVisible, onlyEven]);

  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        (!onlyEven || (onlyEven && contact.id % 2 === 0)) &&
        contact.phone.includes(searchQuery)
    );
    setFilteredContacts(filtered);
  }, [searchQuery, contacts, onlyEven]);

  const handleAllContactsClick = () => {
    setModalAVisible(true);
    setModalBVisible(false);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleUSContactsClick = () => {
    setModalAVisible(false);
    setModalBVisible(true);
    setSearchQuery("");
    setCurrentPage(1);
    loadContacts(true, 1);
  };

  const handleNextPageClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleCheckboxChange = () => {
    setOnlyEven((prev) => !prev);
  };

  const openContactModal = (contact) => {
    // Handle opening Modal C with contact details
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      handleNextPageClick();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClose = () => {
    setModalAVisible(false);
    setModalBVisible(false);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleAllContactsClick}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleUSContactsClick}
          >
            US Contacts
          </button>
        </div>

        {(modalAVisible || modalBVisible) && (
          <div>
            <Modal show={modalAVisible || modalBVisible} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {modalAVisible ? "All Contacts" : "US Contacts"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <FormControl
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  <table className="table mt-3">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Phone</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredContacts.map((contact) => (
                        <tr
                          key={contact.id}
                          onClick={() => openContactModal(contact)}
                        >
                          <td>{contact.id}</td>
                          <td>{contact.phone}</td>
                          <td>{contact.country ? contact.country.name : ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {loading && <p>Loading more contacts...</p>}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Form.Check
                  type="checkbox"
                  label="Only even"
                  checked={onlyEven}
                  onChange={handleCheckboxChange}
                />
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;

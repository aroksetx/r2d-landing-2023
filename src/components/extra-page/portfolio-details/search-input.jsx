import React from 'react';

const SearchInput = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('::::.>>>>>>', event?.target?.elements?.username?.value);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name: event?.target?.elements?.username?.value,
          phone: event?.target?.elements?.phone?.value,
          email: event?.target?.elements?.email?.value,
          message: event?.target?.elements?.message?.value,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://us-central1-aroksetx-13cc6.cloudfunctions.net/app/ready2-air",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => event?.target?.reset())
          .catch((error) => event?.target?.reset())
    }
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Get A Free Quote</h4>
            </div>
            <div className="widget-form">
                <form onSubmit={handleSubmit} action="#">
                    <div className="single-input-field mb-30">
                        <input type="text" name="username" placeholder="Enter full name" />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="single-input-field mb-30">
                        <input type="text" name="email" placeholder="Enter email address" />
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="single-input-field mb-30">
                        <input type="text" name="phone" placeholder="Enter your phone" />
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="single-input-field textarea mb-30">
                        <textarea name="message" id="message3" placeholder="Message"></textarea>
                        <i className="fas fa-edit"></i>
                    </div>
                    <button className="fill-btn clip-btn" type="submit">get a quatation</button>
                </form>
            </div>
        </div>
    );
};

export default SearchInput;
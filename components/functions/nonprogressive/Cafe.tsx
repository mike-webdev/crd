import ConversationItem from "../../items/ConversationItem";
import SessionModal from "../modals/SessionModal";
import Image from 'next/image'

export default function Cafe() {
  return (
    <>
      <p>
        Prepare for your next visit to a cafe. Write a short dialogue between
        you and the cashier using the menu below. The first line is given to you
        and you can use the sample convo fro reference.
      </p>

      <div className="row">
        <div className="col-sm-8">
         <Image src="/images/cafe.jpg"   layout='responsive' height="283" width="507" alt="Image"/>
          {/* <img src="/images/cafe.jpg" alt="" className="img-fluid w-full" /> */}
        </div>
        <div className="col-sm-4">
          <h5 className="fw-bold">SAMPLE CONVERSATION</h5>
          <p>
            Cashier: Hello there, may I take your order?
            <br />
            <br />
            Me: Yes. Can I have iced cafe latte?
            <br />
            <br />
            Cashier: Sure thing, what size would you like your drink to be?
            <br />
            <br />
            Me: It’s my first time trying coffee. Will ordering a large one too
            much?
            <br />
            <br />
            Cashier: Not really. But if you think you can’t handle it, go for
            the regular.
            <br />
            <br />
            Me: Okay, regular it is then.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <ConversationItem name="Cashier: " value="Hi, may I take your order?"/>
        <ConversationItem name="Me: " value=""/>
        <ConversationItem name="Cashier: " value=""/>
        <ConversationItem name="Me: " value=""/>
        <ConversationItem name="Cashier: " value=""/>
        <ConversationItem name="Me: " value=""/>
      </div>

      <div className="row justify-content-between mt-4">
          <div className="col-sm-12" id="cafe_begin_btn">
            <button type="button" className="btn btn-dark col-sm-3" data-bs-toggle="modal" data-bs-target="#mintographySessionModal">Begin Homework <i className="fas fa-caret-right"></i></button>
          </div>
          <div className="col-sm-12" id="cafe_submit_btn" style={{display: 'none'}}>
            <button type="button" className="btn btn-dark col-sm-3"><i className="fab fa-telegram-plane"></i> Submit Answers</button>
          </div>
      </div>

      <SessionModal course="mintography" />
    </>
  );
}

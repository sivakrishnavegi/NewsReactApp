import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const HeaderPage = () => {
  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-1 px-4 " style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-2">
                <MDBCardTitle className="h1-responsive pt-3 m-3 font-bold">Find all the News At one Place</MDBCardTitle>
                <p className="mx-3 mb-2">All the Trending news from the all the news channels that are the most popular from the various chaneeld like cbc, bloombreg, Times of india, also various geers LIKE POLTICS ,SPORTS etc..</p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default HeaderPage;
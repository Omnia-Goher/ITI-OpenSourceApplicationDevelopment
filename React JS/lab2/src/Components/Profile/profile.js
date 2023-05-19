let Profile = () => {
    return (
        <div className="container shadow-lg rounded-5 p-5 border w-25 text-center" style={{marginTop:"100px"}}>
            <div className="card-container">
                <div className="top-card"></div>
                <div className="top-card2"></div>
                <div className="circle"></div>
                <img className="image-class" style={{height:"200px"}} src="./images/personal-43.png" />
                <p className="fw-bold fs-3 mt-3">Omnia Goher</p>
                <p className="mb-3">omnia.goher@gmail.com</p>
                <p>25 years old</p>
            </div>
        </div>
    )
}
export default Profile;
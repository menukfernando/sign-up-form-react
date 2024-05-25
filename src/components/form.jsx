import React from "react";

export default function Form() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        repassword: "",
        newsletter: true
    })

    function handleChange(event){
        const {type, name, value, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData);

        if(formData.password === formData.repassword){
            console.log("SignedUp Sucessfully")
        } else {
            console.log("Password Doesn't Match");
        }

        if(formData.newsletter && formData.password === formData.repassword){
            console.log("Thank you for subscribing for our Newsletter!!")
        } else {
            console.log("")
            return
        }
        
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in the form to create an account</p>
            <hr />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" name="email" id="email" onChange={handleChange} value={formData.email} required/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password" id="password" onChange={handleChange} value={formData.password} required/>

            <label htmlFor="repassword">Repeat Password</label>
            <input type="password" placeholder="Enter Password" name="repassword" id="repassword" onChange={handleChange} value={formData.repassword} required/>

            <label>Join for Our NewsLetter</label>
            <input type="checkbox" checked={formData.newsletter} onChange={handleChange} name="newsletter"/> 

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
    
        </div>
      </form>
    </>
  );
}

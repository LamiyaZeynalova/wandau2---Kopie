import centerImg from "../../../assets/images/image/centerLogo.jpg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type ContactFormInputs = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  // const onSubmit = (data: ContactFormInputs) => {

  //   console.log("Form Data:", data);
  //   alert("Form successfully submitted and validated!");
  //   reset();
  // };

const onSubmit = (data: ContactFormInputs) => {
    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      user_number: data.number,
      message: data.message,
    };

    emailjs
      .send(
        "service_6fy52yq",     //   Service ID
        "template_bgb44vj",    //   Template ID
        templateParams,
        "U3AlYXL-M-Gd9QIZt"    //  Public Key
      )
      .then(() => {
        alert("Mesaj uğurla göndərildi!");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Mesaj göndərilə bilmədi.");
      });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="heroContact">
          <div className="row">
            <h2 className="contactTitle">Contact Us</h2>
            <div className="lineP">
              <div className="line"></div>
              <p>
                For the latest updates about reopening, booking tickets and
                what's <br />
                happening at the Museum, sign up to our newsletter
              </p>
            </div>
          </div>
          <div className="greenShape"></div>
        </div>

        <div className="formTittle">
          <div className="centerImg">
            <img src={centerImg} alt="logoSmall" />
          </div>
          <div className="centerTitle">
            <h2>
              Help us to respond to <br /> you more quickly
            </h2>
          </div>
        </div>

        <div className="formRow">
          {/* LEFT INFO */}
          <div className="infoForm">
            <h4>Main Contact Number</h4>
            <p>020 3461 4444 (Monday to Friday, 9am to 5pm)</p>
            <p>
              Please use this number if you know the name of the person <br />
              or department you would like to contact. Or you can fax <br />
              020 3461 4771.
            </p>

            <h4>General enquiries</h4>
            <a href="mailto:enquiries@wandau.co.uk">enquiries@wandau.co.uk</a>
            <p>020 3461 4878 (Monday to Friday: 10:00 - 17:00).</p>

            <h4>Media enquiries</h4>
            <a href="mailto:sponsor@wandau.co.uk">sponsor@wandau.co.uk</a>
            <p>The person or department you would like to contact</p>
          </div>

          {/* RIGHT FORM */}
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <input
                type="text"
                placeholder="Complete Name"
                {...register("name", {
                  required: "Complete Name is required.",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters.",
                  },
                })}
              />
              {errors.name?.message && (
                <p className="error">{errors.name.message}</p>
              )}

             
              <input
                type="email"
                placeholder="E-mail Address"
                {...register("email", {
                  required: "E-mail Address is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format.",
                  },
                })}
              />
              {errors.email?.message && (
                <p className="error">{errors.email.message}</p>
              )}

              
              <input
                type="text"
                placeholder="Phone Number"
                {...register("number", {
                  required: "Phone Number is required.",
                  pattern: {
                    value: /^[0-9\s()+-]*$/,
                    message: "Invalid phone number format.",
                  },
                  minLength: {
                    value: 8,
                    message: "Phone number must be at least 8 digits.",
                  },
                })}
              />
              {errors.number?.message && (
                <p className="error">{errors.number.message}</p>
              )}

            
              <textarea
                placeholder="Your Message"
                {...register("message", {
                  required: "Message field cannot be empty.",
                  maxLength: {
                    value: 500,
                    message: "Message must not exceed 500 characters.",
                  },
                })}
              ></textarea>
              {errors.message?.message && (
                <p className="error">{errors.message.message}</p>
              )}

              <button type="submit">Send us</button>
            </form>
          </div>
        </div>
      </div>

      <div className="googleMaps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10202.81803653302!2d30.552083977692742!3d50.4247130103151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf73cbd2db91%3A0x8141e376ee29dd50!2sZvirynetske%20Cemetery!5e0!3m2!1str!2str!4v1614660000205!5m2!1str!2str"></iframe>
      </div>
    </section>
  );
};

export default Contact;

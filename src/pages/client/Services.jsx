import "../../assets/styles/services.css";

/* PEDICURE */
import p1 from "../../assets/images/1.jpeg";
import p2 from "../../assets/images/2.jpeg";
import p3 from "../../assets/images/3.jpeg";
import p4 from "../../assets/images/4.jpeg";
import p5 from "../../assets/images/5.jpeg";

/* MANICURE */
import m1 from "../../assets/images/11.jpeg";
import m2 from "../../assets/images/22.jpeg";
import m3 from "../../assets/images/33.jpeg";
import m4 from "../../assets/images/44.jpeg";

/* SWEDISH MASSAGE */
import s1 from "../../assets/images/111.jpeg";
import s2 from "../../assets/images/222.jpeg";
import s3 from "../../assets/images/333.jpeg";
import s4 from "../../assets/images/444.jpeg";
import s5 from "../../assets/images/555.jpeg";

/* DEEP TISSUE MASSAGE */
import d1 from "../../assets/images/1111.jpeg";
import d2 from "../../assets/images/2222.jpeg";
import d3 from "../../assets/images/3333.jpeg";
import d4 from "../../assets/images/4444.jpeg";

export default function Services() {

  const categories = [

    {
      name: "Massage 💆‍♀️",
      description:
        "Relaxing therapies that help relieve stress, body fatigue and muscle tension.",

      services: [

        {
          name: "Swedish Massage",
          price: "KES 2000",
          duration: "60 mins",

          description:
            "A gentle full-body massage that promotes relaxation and better circulation.",

          images: [s1, s2, s3, s4, s5]
        },

        {
          name: "Deep Tissue Massage",
          price: "KES 2500",
          duration: "75 mins",

          description:
            "Firm-pressure massage designed to relieve deeper muscle tension and pain.",

          images: [d1, d2, d3, d4]
        }

      ]
    },

    {
      name: "Nails 💅",
      description:
        "Professional nail care services for healthy, elegant and beautiful nails.",

      services: [

        {
          name: "Manicure",
          price: "KES 1000",
          duration: "30 mins",

          description:
            "Nail shaping, cuticle care and polish application for neat elegant hands.",

          images: [m1, m2, m3, m4]
        },

        {
          name: "Pedicure",
          price: "KES 1500",
          duration: "45 mins",

          description:
            "Relaxing foot treatment including soaking, scrubbing and massage.",

          images: [p1, p2, p3, p4, p5]
        }

      ]
    },

    {
      name: "Facials 🌸",
      description:
        "Professional skincare treatments that cleanse, refresh and brighten your skin.",

      services: [

        {
          name: "Glow Facial",
          price: "KES 2000",
          duration: "60 mins",

          description:
            "Deep cleansing facial treatment for glowing healthy skin.",

          images: [

            "https://images.unsplash.com/photo-1515377905703-c4788e51af15",

            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",

            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",

            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",

            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"

          ]
        }

      ]
    }

  ];

  return (

    <div className="services-page">

      <h1 className="services-title">
        ✨ Our Spa Services
      </h1>

      {categories.map((category, i) => (

        <section key={i} className="category-section">

          {/* CATEGORY TITLE */}
          <h2 className="category-title">
            {category.name}
          </h2>

          {/* CATEGORY DESCRIPTION */}
          <p className="category-description">
            {category.description}
          </p>

          {/* SERVICES */}
          <div className="services-container">

            {category.services.map((service, j) => (

              <div key={j} className="service-card">

                {/* SERVICE NAME */}
                <h3>{service.name}</h3>

                {/* SERVICE DESCRIPTION */}
                <p className="service-description">
                  {service.description}
                </p>

                {/* IMAGES */}
                <div className="service-images">

                  {service.images.map((img, k) => (

                    <img
                      key={k}
                      src={img}
                      alt={service.name}
                    />

                  ))}

                </div>

                {/* DETAILS */}
                <div className="service-details">

                  <span>{service.duration}</span>

                  <span>{service.price}</span>

                </div>

                {/* BUTTON */}
                <button className="book-btn">
                  Book Appointment
                </button>

              </div>

            ))}

          </div>

        </section>

      ))}

    </div>
  );
}
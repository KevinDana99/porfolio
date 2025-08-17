import testimonials from "@/mocks/testimonials";
import SingleTestimonial from "./SingleTestimonial";

const Reviews = () => {
  return (
    <section className="relative z-10 bg-gray-light dark:bg-bg-color-dark box-border ">
      <div className="container ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <SingleTestimonial
              key={`key-${testimonial.id}-${index}-testimonials`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

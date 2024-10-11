import Image from "next/image";

export default function TileSection({
  imageRef,
  heading,
  SubHeading,
  description,
  logos = [],
  logoDes = [],
}) {
  return (
    <section>
      <div>
        <Image src={imageRef} width={200} height={200} alt="Blog-Image" />
      </div>
      <div>
        <h1>{heading}</h1>
        <h2>{SubHeading}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center"> 
            <img src={logo} alt={logoDes[index]} className="h-10 w-auto" /> 
            <span className="ml-2">{logoDes[index]}</span> 
          </div>
        ))}
      </div>
    </section>
  );
}

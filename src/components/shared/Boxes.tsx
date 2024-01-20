import project1 from "@/assets/images/product-001.png";
import project2 from "@/assets/images/school-Management-System.png";
import Image from "next/image";
// data
const dbdata = [
  {
    picName: project1,
    title: "Ecommerce website",
    altName: "project picture",
  },
  {
    picName: project2,
    title: "School Management System",
    altName: "project picture",
  },
];
// components reusable
const Boxes = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
        {dbdata.map((item, index) => {
          return (
            <div className="px-2" key={index}>
              <Image
                src={item.picName}
                alt={item.altName}
                width={230}
                height={180}
                className="rounded-lg border border-teal-950 mt-2 md:w-96 md:h-72"
              />
              <p className="text-center mb-4 pt-2">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boxes;

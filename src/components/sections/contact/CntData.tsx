import Button from "@/components/shared/Button";
import { contactsData } from "@/lib/db";
import { ContectType } from "@/types";

const CntData = async () => {
  const contacts: ContectType[] = await contactsData();
  return (
    <main className="mt-14 max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md sm:grid-cols-3 grid justify-between content-center mx-auto sm:m-0"
          >
            <h2 className="text-lg font-medium mb-2">{contact.title}</h2>
            <p className="text-sm mb-4 self-center">{contact.description}</p>
            <button className="py-2 px-4 hover:scale-105 duration-300">
              <Button
                link={contact.link}
                text={contact.buttonText}
                target="_blank"
              />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
export default CntData;

import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/Jc1XPCrKHbsUpvXUhFIpI2ZXeRULCxnB3zDyHb489w5rN0ai",
  "https://utfs.io/f/Jc1XPCrKHbsURysldQ2ePOaCqLAumT8vYEsg72UXV9yBRMWi",
  "https://utfs.io/f/Jc1XPCrKHbsUTs2CNmdYFlHUEZKIAT3rOvaVhCtLf7RMgz4J",
  "https://utfs.io/f/Jc1XPCrKHbsUO5exwSJB3yHLVENS4hnstRg7Z0dUFCjomuwf",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      {/* <div className="flex flex-wrap gap-4"> */}
      <div>
        hello
        {/* {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))} */}
      </div>
    </main>
  );
}

import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <section>
      <UserButton afterSignOutUrl="/" />
    </section>
  );
};

export default Page;

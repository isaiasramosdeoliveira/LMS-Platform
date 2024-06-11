import { UserButton } from "@clerk/nextjs";

const Page = () => {
  return (
    <section>
      <UserButton afterSignOutUrl="/" />
      Route protected
    </section>
  );
};

export default Page;

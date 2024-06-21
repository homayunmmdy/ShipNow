import { PageTitle } from "@/app/components/layouts";
import React from "react";

const FAQsPage = () => {
  return (
    <>
      <PageTitle title="FAQs" />
      <div className="w-[84%] md:w-[72%] mx-auto">
        <div className="join join-vertical w-full my-10">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-bold ">
              What do I got exactly
            </div>
            <div className="collapse-content">
              <p>
                1/ The NextJS starter with all the boilerplate code you need to
                run an online business: a admin for controll the site, a
                database, login, a blog, UI components, and much more.
              </p>
              <p>The repo is available in:</p>
              <ul className="pl-3">
                <li>- Javascript app router</li>
                <li>- Typescript app router</li>
              </ul>
              <p>
                2/ The documentation helps you set up your app from scratch,
                write copy that and ship now.
              </p>

              <p>3/ Access support team 24 hours for week</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-bold">
              Can I use that if I don't have coding skill ?
            </div>
            <div className="collapse-content">
              <p>
                Yes you can if you don't have any coding knowlege you reach to
                support team and we will setup your project for you
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-bold">
              Can I Customize the components
            </div>
            <div className="collapse-content">
              <p>
                Yes feel free the customize the components if you have coding
                knowlege also we put lot's of comments to helps you to customize
                each components easily but if you don't have coding knowlege
                don't worry you can reach to support to customize you components
                but this proccess will cost money{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-bold">
              My tech is different can I use it ?
            </div>
            <div className="collapse-content">
              <p>Yes, as long as you're comfortable with React & NextJS.</p>
              <p>
                Libraries are independent. You can use Postgres instead of
                MongoDB for instance.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-bold">
              Is it website template?
            </div>
            <div className="collapse-content">
              <p>
                It's more than just a template. You can copy/paste sections to
                build your site quickly, like a pricing section, an FAQ, and
                even an entire blog. You also get a bunch of UI components like
                buttons, modals, popovers, etc.
              </p>
              <p>
                The NextJS starter also comes with handy tools you need to run
                an online business—payment processing, emails, SEO, etc.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-bold">
              Are there any other costs associated?
            </div>
            <div className="collapse-content">
              <p>
                We are using MongoDB free trial to save your data and is it good
                for small and medium size project also we use hobby project of
                the vercel to host your website and Clerk to handle the auth but
                if you want to have extra space or new feature you must reach
                out to support team and pay extra based on their services
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsPage;

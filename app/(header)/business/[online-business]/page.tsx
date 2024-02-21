import { Tally1 } from "lucide-react";
import React from "react";
import { MoveRight } from "lucide-react";

function OnlineBusiness() {
  return (
    <div className="">
      <div className="flex items-center space-x-4 text-center">
        <h1 className="text-2xl font-bold text-purple-300 text-justify">
          Business
        </h1>
        <Tally1 />
        <button className="text-sm text-blue-300 ">Online Business</button>
        <MoveRight className=" w-4" />
        <button className="text-sm text-blue-300 ">Drop Shipping </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-4">Drop Shipping </h1>
        <div className="text-justify text-sm md:w-1/2 ">
          <p className="font-bold mt-4">What is Drop Shipping ?</p>
          <p className="mt-4 text-xs">
            Dropshipping is a retail fulfillment method where a store doesn't
            keep the products it sells in stock. Instead, when a store sells a
            product, it purchases the item from a third party and has it shipped
            directly to the customer. As a result, the merchant never sees or
            handles the product. The biggest advantage of dropshipping is that
            it eliminates the need for inventory storage and significantly
            reduces upfront costs for starting an e-commerce business. It's a
            popular business model for online entrepreneurs because it allows
            them to focus on marketing and customer service without the hassle
            of managing inventory or fulfillment logistics. However,
            dropshipping also comes with its own set of challenges, such as
            finding reliable suppliers, managing product quality and shipping
            times, and maintaining good customer satisfaction.
          </p>
          <p className="font-bold mt-4">How to do drop shipping ? ?</p>
          <div className="mt-4 text-xs">
            <ol className="list-decimal ml-4">
              <li>
                Choose a niche: Decide what products you want to sell. Consider
                factors like your interests, market demand, and potential profit
                margins. Researching competitors and trends can help you
                identify a profitable niche.
              </li>
              <li>
                Choose a niche: Decide what products you want to sell. Consider
                factors like your interests, market demand, and potential profit
                margins. Researching competitors and trends can help you
                identify a profitable niche.
              </li>
              <li>
                Choose a niche: Decide what products you want to sell. Consider
                factors like your interests, market demand, and potential profit
                margins. Researching competitors and trends can help you
                identify a profitable niche.
              </li>

              <li>
                Choose a niche: Decide what products you want to sell. Consider
                factors like your interests, market demand, and potential profit
                margins. Researching competitors and trends can help you
                identify a profitable niche.
              </li>
              <li>
                Choose a niche: Decide what products you want to sell. Consider
                factors like your interests, market demand, and potential profit
                margins. Researching competitors and trends can help you
                identify a profitable niche.
              </li>
            </ol>
          </div>
          <p className="font-bold mt-4">What is Drop Shipping ?</p>
          <p className="mt-4">
            Dropshipping is a retail fulfillment method where a store doesn't
            keep the products it sells in stock. Instead, when a store sells a
            product, it purchases the item from a third party and has it shipped
            directly to the customer. As a result, the merchant never sees or
            handles the product. The biggest advantage of dropshipping is that
            it eliminates the need for inventory storage and significantly
            reduces upfront costs for starting an e-commerce business. It's a
            popular business model for online entrepreneurs because it allows
            them to focus on marketing and customer service without the hassle
            of managing inventory or fulfillment logistics. However,
            dropshipping also comes with its own set of challenges, such as
            finding reliable suppliers, managing product quality and shipping
            times, and maintaining good customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnlineBusiness;

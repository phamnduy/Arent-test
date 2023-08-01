import React from "react";
import { shallow } from "enzyme";
import { DealLikelihoodScoring } from "../../pages/deal-likelihood-scoring";

describe("Deal likelihood scoring component", () => {
  it("Deal likelihood scoring", function () {
    const wrapper = shallow(<DealLikelihoodScoring />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("Deal likelihood scoring");
  });
});

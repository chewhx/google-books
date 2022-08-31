import * as gbooks from "../src/index";

describe("Test search", () => {
  it("gbooks.standard is defined", () => {
    expect(gbooks.standard).toBeDefined();
  });

  it("gbooks.search is defined", () => {
    expect(gbooks.search).toBeDefined();
  });

  it("gbooks.id is defined", () => {
    expect(gbooks.id).toBeDefined();
  });

  it("gbooks.title is defined", () => {
    expect(gbooks.title).toBeDefined();
  });

  it("gbooks.author is defined", () => {
    expect(gbooks.author).toBeDefined();
  });

  it("gbooks.isbn is defined", () => {
    expect(gbooks.isbn).toBeDefined();
  });
});

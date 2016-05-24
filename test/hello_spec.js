describe("Hello", function() {
  it("says hello", function() {
    expect(sayHello("John")).toBe("Hello, John!");
    expect(sayHello("Mark")).toBe("Hello, Mark!");
  });
});

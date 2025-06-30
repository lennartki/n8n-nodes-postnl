import {PostNL} from "./PostNL.node";

test("smoke", () => {
    const node = new PostNL()
    expect(node.description.properties).toBeDefined()
})
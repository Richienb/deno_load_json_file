import {assertEquals} from "https://deno.land/std/testing/asserts.ts"
import loadJsonFile from "./mod.ts"

Deno.test("main", async () => {
	const fixturePath = "fixture.json"
	const fixture = {foo: "bar"}

	assertEquals(await loadJsonFile<{foo: string}>(fixturePath), fixture)
	assertEquals(loadJsonFile.sync<{foo: string}>(fixturePath), fixture)
})

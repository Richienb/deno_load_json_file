import {assertEquals} from "https://deno.land/std/testing/asserts.ts"
import loadJsonFile from "./mod.ts"

Deno.test("main", async () => {
	const fixturePath = "fixture.json"

	assertEquals((await loadJsonFile<{foo: string}>(fixturePath)).foo, "bar")
	assertEquals(loadJsonFile.sync<{foo: string}>(fixturePath).foo, "bar")
})

# load_json_file

Read and parse a JSON file.

## Usage

```ts
import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts"

console.log(await loadJsonFile("foo.json"))
//=> { foo: "bar" }
```

## Permissions required

- Reading (`--allow-read`)

## API

### loadJsonFile(filePath)

Returns a promise which resolves with the parsed JSON.

### loadJsonFile.sync(filePath)

Returns the parsed JSON.

#### filePath

Type: `string`

The path to the JSON file to read.

# Expressions

`raven-attr="{{expression}}"`

## Basic expresssion templates
### With one property
#### Basic templates
Expression can contain only a property from viewmodel.
1. It can be a root property
`raven-attr="property`

2. It can be a nested property
`raven-attr="object.property"`

3. It can be a nested property of an array
- `raven-attr="array[0]"`
- `raven-attr="array[0].property"`
- `raven-attr="object.array[0]"`
- `raven-attr="object.array[0].property"`

#### Extended templates
Expressions can contain operators

1. It can be negated (is false)
`raven-attr="!property"`

2. It can be negated (is falsy)
`raven-attr="!!property"`

### With two properties
Expression can contain only a property from viewmodel.
The basic usages same as the single property.

The main template:

`raven-attr="{{prop}} {{operator}} {{prop2}}˛`

Basic rules:
- The first property must be a valid property from context
- Between the first property and the operator must be a ' ' (space)
- The operator can be one of the follow
   - conditions
      - `==`
      - `>`
      - `<`
      - `<=`
      - `>=`
    - loops
      - `as`
      - `in`
- Between the operator and the second property must be a ' ' (space)
- The second property can be
   - A valid property from the context
   - An implicitly typed primitive
      - string: 'foo'
      - number: 1
      - boolean: false
   - A scoped variable
      - `as`
         - `raven-attr="array as item`
         - Then you can use the 'item' as the same as the other properties
      - `in`
         - `raven-attr="array in index`
         - The you can use the 'index' as the same as the other properties.

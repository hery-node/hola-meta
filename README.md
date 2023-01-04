## hola-meta

This is the source code for learning meta programming using hola-server/hola-web

### What is meta programming ?

Meta programming is a programming technique in which computer programs have the ability to treat other programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs, and even modify itself while running. In some cases, this allows programmers to minimize the number of lines of code to express a solution, in turn reducing development time. It also allows programs a greater flexibility to efficiently handle new situations without recompilation.

### hola-server and hola-web

Hola-server and hola-web are two projects that work together and aim to create a meta programming framework for nodejs.

It uses express as web framework and mongodb as data storage layer. It uses vuetify as web UI framwork and also provides vue components to work with server side.

It just lets user provide the entity router defination such as below:

```
const { init_router } = require('hola-server');

module.exports = init_router({
    collection: "user",
    creatable: true,
    cloneable: true,
    readable: true,
    updatable: true,
    deleteable: true,
    primary_keys: ["name"],
    ref_label: "name",
    fields: [
        { name: "name", required: true },
        { name: "password", type: "password", required: true },
    ]
});
```

- collection: the mongodb collection name
- creatable, cloneable, readable, updatable, deleteable are used to set the rules for the entity. For example, if you set creatable to true, it will automatically create the create router for you.
- primary keys: the entity primary keys
- ref_label: which field as reference label if this entity is referred by other entity
- fields: the entity properties

After you defined this, then actually you have defined this. It will automatically create the express router methods based on your defination.

In the web side, you can create a CRUD table using below:

```
<template>
  <h-crud :entity="entity" :item-label-key="item_label_key" :sort-key="sort_key" :sort-desc="sort_desc"></h-crud>
</template>

<script>
export default {
  data() {
    return {
      entity: "user",
      item_label_key: "name",
      sort_key: ["name"],
      sort_desc: [false],
    };
  },
};
</script>

```

Then it will create the crud table for you based on your server meta definition.

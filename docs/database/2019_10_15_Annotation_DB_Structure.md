# Database Structure for Annotation Platform

## Introduction

In this document, we lay out the structure of the database underlying the data visualisation and annotation platform.
As base requirement, three different types of data together with the corresponding annotations need to be stored in the database:

* time-series (TS),
* networks (N),
* temporal networks (TN).

Sets of data objects can be bundled into collections.
Similarly, sets of collections can be bundled into collections.
However, collections can not contain both data objects and collections at once.

We chose to use SQLite for the database for the offered simplicity, portability, and general ease of use.

## Example

As an example, we now assume we want to store a total of 4 data objects of types (TS, TS, N, TN).
The first three objects (TS, TS, N) constitute `collection_1`, whereas (TN) is the only object in `collection_2`.
Further, `collection_1` and `collection_2` form `collection_3`.

## Storing collections

SQLite does not support an internal file structure.
Therefore, the structure described above is encoded in the name of the individual tables.
For this purpose, we employ standard file path notation.
For example, the relation of `collection_2` being part of collection `collection_3` would be encoded as `collection_3/collection_2`

## Storing data

Moreover, multiple tables are required to store all information on each data object.
Corresponding tables can be matched using their names, as these names follow the convention `*TYPE*_*DATA*_*NAME*`.
For data of type (TS), we require two tables for the time-series and annotations, respectively.

* Time-series (`TS_S_*NAME*`)

    | value | time |
    | ---- | ---- |
    | ... | ... |

* Annotations (`TS_A_*NAME*`)

    | time_from | time_to | title | text |
    | ---- | ---- | ---- | ---- |
    | ... | ... | ... | ... |

For network objects (N), we require tables for nodes, edges, and annotations.
Note that there can be any amount of `[properties]` stored in individual columns per property.
Further note that both annotations to nodes and edges are stored in the annotations table.
For nodes, the `target` is set to `None`.

* Nodes (`N_N_*NAME*`)

    | node | [properties] |
    | ---- | ---- |
    | ... | ... |

* Edges (`N_E_*NAME*`)

    | source | target | [properties] |
    | ---- | ---- | ---- |
    | ... | ... | ... |

* Annotations (`N_A_*NAME*`)

    | source | target | title | text |
    | ---- | ---- | ---- | ---- |
    | ... | ... | ... | ... |

Finally, for temporal network data (TN), also three tables for nodes, edges, and annotations are required.
The difference to the standard network is only the consideration of `time_from` and `time_to` for all elements.

* Nodes (`TN_N_*NAME*`)

    | node | time_from | time_to | [properties] |
    | ---- | ---- | ---- | ---- |
    | ... | ... | ... | ... |

* Edges (`TN_E_*NAME*`)

    | source | target | time_from | time_to | [properties] |
    | ---- | ---- | ---- | ---- | ---- |
    | ... | ... | ... | ... | ... |

* Annotations (`TN_A_*NAME*`)

    | source | target | time_from | time_to | title | text |
    | ---- | ---- | ---- | ---- | ---- | ---- |
    | ... | ... | ... | ... | ... | ... |

## Resulting structure

Putting it all together, the following tables are required to store all information related to the data from the example.

```
collection_3/collection_1/TS_S_*NAME_1*
collection_3/collection_1/TS_A_*NAME_1*

collection_3/collection_1/TS_S_*NAME_2*
collection_3/collection_1/TS_A_*NAME_2*

collection_3/collection_1/N_N_*NAME_3*
collection_3/collection_1/N_E_*NAME_3*
collection_3/collection_1/N_A_*NAME_3*

collection_3/collection_2/TN_N_*NAME_4*
collection_3/collection_2/TN_E_*NAME_4*
collection_3/collection_2/TN_A_*NAME_4*
```

The first part of the table name indicates the internal structure of the collections
The last part indicates which data object the table refers to and which subset of the data it contains.

1. Why Mongoose?
        ↓
2. Connection
        ↓
3. Schema
        ↓
4. Model
        ↓
5. Document
        ↓
6. Validation
        ↓
7. Required
        ↓
8. Default
        ↓
9. Enum





Relationship Questions
Embedded → Store related data inside the same document.
Referencing → Store another document's ObjectId.
ObjectId → MongoDB's unique identifier.
populate() → Replaces referenced ObjectId with the actual document.


Query Questions
Filtering → Select matching documents.
Projection → Select specific fields.
Sorting → Order results.
limit() → Restrict number of documents.
skip() → Skip documents.
Pagination → skip + limit.
Regex Search → Partial, pattern-based matching.


Index Questions
Index → Speeds up reads by avoiding a full collection scan.
Single Index → One field.
Compound Index → Multiple fields.
Avoid Over-Indexing → Too many indexes slow down inserts and updates.

# Architecture

EMP Open Source follows a modular but tightly coupled architecture to keep the system understandable and predictable.

## Core principles

- Single-instance deployment
- Shared relational database
- Explicit business rules
- Minimal abstraction

## High-level components

- Backend service for business logic
- Relational database for all records
- Optional frontend consuming internal APIs

The architecture favors clarity over flexibility.
---
title: Outbox Pattern in Azure
publishDate: 2025-08-10
description: System Design - Event Driven
author: Josh Q.
excerpt: |
  In the world of microservices and distributed systems, ensuring reliable
  event publishing is a challenge. One proven solution is the
  Transactional Outbox Pattern. And if you're building on Azure with
  Cosmos DB, Event Hub, and microservices, you're in luck. This pattern
  fits beautifully into that stack.
image:
src:
alt:
tags: [Software Architecture, Full Stack Development, Software Engineering]
---

# Outbox Pattern in Event-Driven Architectures with Cosmos DB and Event Hub

In the world of microservices and distributed systems, ensuring reliable
event publishing is a challenge. One proven solution is the
Transactional Outbox Pattern. And if you're building on Azure with
Cosmos DB, Event Hub, and microservices, you're in luck. This pattern
fits beautifully into that stack.

Let's break down how it works, why it matters, and how to implement it
effectively.

## What Is the Outbox Pattern?

The Outbox Pattern solves a classic problem: how do you ensure that both
your database update and your event publication happen reliably --- even
if one fails?

Instead of publishing events directly, you:

- Write your domain data (e.g., an order or invoice).
- Write an event record to an "outbox" table or collection in the
  same transaction.
- A separate process reads the outbox and publishes the event to your
  message broker (like Event Hub).

This guarantees consistency: if the database write succeeds, the event
is guaranteed to be recorded.

## Implementing the Outbox Pattern with Cosmos DB + Event Hub

Here's how you can implement this pattern using Azure-native tools:

### 1. Cosmos DB as Your Outbox Store

Cosmos DB supports TransactionalBatch, allowing you to atomically write
both your business entity and the outbox event document. For example:

```json
{
	"type": "OrderCreated",
	"orderId": "12345",
	"timestamp": "2025-09-16T13:45:00Z"
}
```

This becomes your event payload.

### 2. Change Feed as the Event Source

Cosmos DB's Change Feed acts like a built-in event log. It tracks
inserts and updates, and you can use it to detect new outbox entries.

You can process the Change Feed using:

- Azure Functions
- Azure Data Factory
- Custom background services

### 3. Event Hub for Distribution

Once your processor reads the outbox event, it publishes it to Event
Hub, which fans it out to downstream consumers, analytics, other
services, or external systems.

## Is Change Feed the Same as CDC?

Not quite, but they're cousins.

### Cosmos DB Change Feed vs Traditional CDC

| Feature           | Cosmos DB Change Feed                  | Traditional CDC (e.g., SQL Server, Debezium) |
| ----------------- | -------------------------------------- | -------------------------------------------- |
| Trigger Source    | Monitors inserts and updates only      | Captures inserts, updates, and deletes       |
| Delete Support    | No native delete tracking              | Fully supports deletes                       |
| Granularity       | Returns full documents                 | Often returns row-level changes or diffs     |
| Ordering          | Per-partition order (not global)       | Often ordered by transaction log             |
| Consumption Model | Pull-based via SDK or Azure Functions  | Often push-based or log-based streaming      |
| Storage           | Built into Cosmos DB, no external log  | Uses transaction logs or binlogs             |
| Retention         | Limited (default ~5 minutes to 7 days) | Configurable, often longer                   |
| Scalability       | Highly scalable, cloud-native          | Depends on DB engine and CDC tool            |
|                   |                                        |                                              |

> Cosmos DB Change Feed is like CDC-lite which is perfect for cloud-native, event-driven scenarios, but with some limitations (like no delete tracking).

## Sample Architecture

Here's how the pieces fit together:

- **Cosmos DB**: Stores domain data + outbox event
- **Change Feed Processor**: Reads new outbox entries
- **Event Hub**: Publishes events to consumers
- **Microservices**: Subscribe to Event Hub for processing

This setup is scalable, resilient, and cleanly decoupled.

![alt text](outbox-01.svg 'Flowchart')

## Gotchas to Watch Out For

- **Idempotency**: Consumers must handle duplicate events gracefully.
- **Ordering**: Change Feed guarantees order only within partitions.
- **Delete Events**: You'll need a workaround (e.g., tombstone
  documents).
- **Latency**: Change Feed is near-real-time, not instantaneous.

## Final Thoughts

If you're building event-driven systems on Azure, the Outbox Pattern
with Cosmos DB and Event Hub is a powerful and reliable approach. It's
not just feasible, it's elegant.

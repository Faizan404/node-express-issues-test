# Coding assignment (backend)

## Description
Issues describe problems and bugs, found by testers in client applications. Your job is to create a simple REST API to manage issue entities.

An initial project with some example code has been set up for you, but you're not limited to these tools & structure, feel free to make changes if you need to.

A sample issue to illustrate the issue item structure:
```json
{
    "id": 123,
    "title": "Bug in issue-service",
    "description": "Ah snap :("
}
```

## Your tasks

### Task 1: Implement an endpoint that creates a new issue

### Task 2: Implement an endpoint that lists all stored issues

### Task 3: Implement an endpoint that modifies an issue

### Task 4: Implement issue revisions
Issues being one of the central models, it is important to track the changes made to them. Every time a change is made to an issue, we want to track what exactly was changed, by whom and when.

Each change is a revision, containing the issue current state and the changes made.
For example:
```json
{
    "issue": {
        "title": "Bug in issue-service",
        "description": "It does not generate revisions"
    },
    "changes": {
        "description": "It does not generate revisions"
    },
    "updatedAt": "2024-03-29T15:40:42.000Z"
}
```

Requirements:
- Store issue revision when creating a new issue
- Store issue revision when updating an issue
- Implement a new endpoint that returns all revisions of a particular issue

### Task 5: Implement authentication
- Require a valid JWT token to be present for all requests (except for the discovery and health endpoints)
- Every time a change is made to the DB, store the change author's email address (i.e. created_by, updated_by)

### Task 6: Before and after comparison
Create an endpoint that takes two revisions of a particular issue and returns the difference between the two.

The response object should contain the following data pieces:
- before: the issue's content at revision A
- after: the issue's content at revision B
- changes: summary of the differences (i.e. listing all properties that have changed and their values)
- revisions: the full trail of revisions between version A and B

By default the comparison can work from older to newer revisions, but for bonus points you can implement comparisons from newer to older revisions as well.

## FAQ

### Should I take the tasks in order?
Yes, we expect you to start from the first task and progress from there.

### What do you look for in the solution?
Ideally we would like to see a working solution. The solution does not have to be perfect, so first make it work, then make it pretty.

We will look for REST API development best practices, like route naming, validations, error handling, pagination, ensuring data consistency and so on.

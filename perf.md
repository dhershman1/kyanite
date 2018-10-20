This is strictly to keep track of performance changes, in case I need them later.

- Overall performance across all methods is up
- `range` is able to handle from 0 to 10mil in roughly 300ms
- `uniqBy` is able to handle 10 million indexies in under a second way down from 10k limit
- `map` improved from 1.5s for 10mil down to 60-70ms
- `zip` improved slightly from 11s for 10mil down to 8s
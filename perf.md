This is strictly to keep track of performance changes, in case I need them later.

**All perf ratings are against data using 10mil records**

- Overall performance across all methods is up thanks to the optimized internal currying
- `range` is able to handle from 0 to 10mil in roughly 300ms
- `uniqBy` improved from memory error to 800ms
- `map` improved from 1.5s down to 60-70ms
- `zip` improved slightly from 11s down to 400ms
- `draft` improved from 8s down to 1.5s
- `omit` slight gain from 2s to 1.5-1.6s
- `find` gain from 300ms to 12.5ms
- `intersection` improved from 23s to 1.6s
- `props` Optimized to use internal map down from 1s to 62ms
- `groupBy` Optimized from 23s to 1.6s
- `difference` improved from 25s to 4s
- `partition` is now able to handle this many records in 550ms

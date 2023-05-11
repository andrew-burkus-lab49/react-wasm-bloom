# BloomFilter Demo

## Resources
* [Filter size calculator](https://hur.st/bloomfilter/?n=40000&p=0.01&m=&k=5)
* [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)

BloomFilters are a cool example of an effective compromise in algorithm design: given a large set of values
we want to compute whether an arbitrary value is a member of that set. The problem here is that for very large sets
we will end up using an ungodly amount of memory to represent the set. 
If we used a hash set, it will likely be a 64 bit
hash for each record resulting in many MB used for just tens of thousands of records. 

This is where the compromise comes in, if we use a hashset we will get absolute certainty that any value we test 
against the set is a member or not. What if we didn't need to be absolutely certain? What if we could just be 99.999%
certain? That's the compromise. We'll trade absolute certainty for memory efficiency.

So, what is a BloomFilter? It's actually an incredibly simple idea which is what makes its efficacy so impressive.
At its core, it's an array of unsigned bytes and an algorithm for looking up addresses of a handful of bytes based
on a given value. Let's say we're given a value S, to lookup the bytes we want to check for S we hash it K number of times and then look those hashes up modulo the length of our byte array. 

We can optimize this further by addressing individual bits instead of just using an entire byte to represent 1 or 0. So I pulled in a library for using a bit vectors instead of just vectors. Bit_vec allows us to set individual bits instead of waisting 7 bits per byte.

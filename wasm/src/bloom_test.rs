use crate::bloom::BloomFilter;

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_insert() {
        let mut bloom_filter = BloomFilter::new(100);
        bloom_filter.insert("hello");
        bloom_filter.insert("world");
        assert_eq!(bloom_filter.contains("hello"), true);
        assert_eq!(bloom_filter.contains("world"), true);
        assert_eq!(bloom_filter.contains("foo"), false);
        assert_eq!(bloom_filter.contains("bar"), false);
    }
}

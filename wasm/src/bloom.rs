use crate::hash_fns;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub struct BloomFilter {
    hash_array: Vec<u8>,
}

fn khash(s: &str) -> [u64; 5] {
    let h1 = hash_fns::sha224(s);
    let h2 = hash_fns::string_fold_hash(s);
    let h3 = hash_fns::sha512(s);
    let h4 = hash_fns::string_sum_hash(s);
    let h5 = hash_fns::default_hash(s);
    [h1, h2, h3, h4, h5]
}

#[wasm_bindgen]
impl BloomFilter {
    pub fn new(length: usize) -> BloomFilter {
        let mut array = Vec::new();
        for _ in 0..length {
            array.push(0);
        }
        BloomFilter { hash_array: array }
    }

    pub fn contains(&self, query: &str) -> bool {
        let hashes = khash(query);
        let l: u64 = self.hash_array.len() as u64;
        hashes
            .iter()
            .map(|hash| self.hash_array[(hash % l) as usize])
            .reduce(|accum, cur| accum & cur)
            .unwrap()
            == 1
    }

    pub fn insert(&mut self, value: &str) -> () {
        let hashes = khash(value);
        let l = self.hash_array.len() as u64;
        for hash in hashes {
            self.hash_array[(hash % l) as usize] = 1;
        }
    }
}

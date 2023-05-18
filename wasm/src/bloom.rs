use crate::hash_fns;
use bit_vec::BitVec;
use wasm_bindgen::prelude::wasm_bindgen;
#[cfg(test)]
mod tests;

#[derive(Debug)]
#[wasm_bindgen]
pub struct BloomFilter {
    bits: Vec<bool>,
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
    #[wasm_bindgen(constructor)]
    pub fn new(length: usize) -> BloomFilter {
        BloomFilter {
            bits: vec![false; length],
        }
    }

    pub fn contains(&self, query: &str) -> bool {
        let hashes = khash(query);
        hashes
            .iter()
            .map(|hash: &u64| self.get_bit(*hash))
            .reduce(|accum, cur| accum && cur)
            .unwrap()
    }

    pub fn insert(&mut self, value: &str) {
        let hashes = khash(value);
        for hash in hashes {
            self.set_bit(hash);
        }
    }

    pub fn size(&self) -> usize {
        self.bits.len()
    }

    fn set_bit(&mut self, index: u64) {
        let length = self.bits.len();
        self.bits[index as usize % length] = true;
    }

    fn get_bit(&self, hash: u64) -> bool {
        let length = self.bits.len();
        self.bits[hash as usize % length]
    }
}

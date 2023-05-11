#!/usr/bin/env python3
path = "./public/hosts.txt"
out_path = "./public/hosts_full.csv"

with open(path) as file:
    lines = [line.strip() for line in file if line.count("0.0.0.0") > 0]
    lines = [line.replace(" ", ",") for line in lines]
    print(f"{len(lines)} lines")
    for line in lines[:10]:
        print(f"\t{line}")

with open(out_path, "w") as file:
    file.write("ip, host\n")
    print(f"Writing {len(lines)} lines")
    file.write("\n".join(lines))

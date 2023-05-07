#!/usr/bin/env python3
path = "./public/hosts.csv"

with open(path) as file:
    lines = [line.strip() for line in file if line.count("0.0.0.0") > 0]
    lines = [line.replace(" ", ",") for line in lines]
    print(lines)

with open(path, "w") as file:
    file.write("ip, host\n")
    print(f"Writing {len(lines)} lines")
    file.write("\n".join(lines))

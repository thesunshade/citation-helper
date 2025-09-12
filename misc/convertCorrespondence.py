
import sys
import re

def convert_tsv_to_grouped_format(input_filepath, output_filepath):
    grouped_data = {}

    with open(input_filepath, 'r') as f_in:
        for line in f_in:
            line = line.strip()
            if not line:
                continue

            parts = line.split('\t')
            if len(parts) != 2:
                print(f"Skipping malformed line: {line}", file=sys.stderr)
                continue

            key = parts[0]
            value = parts[1]

            match = re.match(r'[a-zA-Z]+(\d+)\.(\d+)', key)
            if not match:
                print(f"Skipping line with unparseable key: {key}", file=sys.stderr)
                continue

            group_id = int(match.group(1))
            item_id = int(match.group(2))

            if group_id not in grouped_data:
                grouped_data[group_id] = []
            grouped_data[group_id].append([item_id, f'/{value}'])

    with open(output_filepath, 'w') as f_out:
        for group_id in sorted(grouped_data.keys()):
            f_out.write(f'{group_id}: [\n')
            # Sort items by item_id before writing
            sorted_items = sorted(grouped_data[group_id], key=lambda x: x[0])
            for i, item in enumerate(sorted_items):
                f_out.write(f'[{item[0]}, "{item[1]}"],')
                if i < len(sorted_items) - 1:
                    f_out.write('\n')
            f_out.write("\n],\n")


if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python convert_tsv.py <input_tsv_filepath> <output_filepath>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    convert_tsv_to_grouped_format(input_file, output_file)



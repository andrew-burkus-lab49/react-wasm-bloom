

export const parseCSV = (file: string) => {
    const lines = file.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).map(line => {
        const values = line.split(',');
        return headers.reduce((obj: Record<string, string>, header, i) => {
            obj[header] = values[i];
            return obj;
        }, {})
    });
    return { data, headers }
}

export const parseFiles = (files: FileList, setHeaders: (headers: string[]) => (void),
    setRecords: (records: Record<string, string>[]) => void) => {
    const reader = new FileReader()

    reader.addEventListener('load', e => {
        const { result } = e.target as FileReader

        if (result && typeof result == 'string') {
            const b64 = result.substring(result.lastIndexOf(',') + 1)
            const parsed = atob(b64)
            const csv = parseCSV(parsed)
            setHeaders(csv.headers)
            setRecords(csv.data)
        }
    })

    if (files && files.length > 0 && files[0]) {
        reader.readAsDataURL(files[0])
    }
}

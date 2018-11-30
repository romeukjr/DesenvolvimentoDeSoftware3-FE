export class DateFormatter {
    public static stringDateTime(serializedDate: Date): string {
        const date = new Date(serializedDate);
        if (date) {
            return date.toLocaleDateString("pt-BR") + "  -  " + date.getHours() + "h" + date.getMinutes();
        }

        return "";
    }
}
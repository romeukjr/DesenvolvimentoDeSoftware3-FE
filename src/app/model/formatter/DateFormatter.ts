export class DateFormatter {
    public static stringDateTime(date: Date): string {
        if (date) {
            return date.toLocaleDateString("pt-BR") + "  -  " + date.getHours() + "h" + date.getMinutes();
        }

        return "";
    }
}
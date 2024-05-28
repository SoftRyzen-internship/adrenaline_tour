export function formatPhoneNumber(phoneNumber: string): string {
  if (phoneNumber.startsWith('+38')) {
    return `${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 6)}) ${phoneNumber.slice(6)}`;
  } else if (phoneNumber.startsWith('+42')) {
    return `${phoneNumber.slice(0, 4)} (${phoneNumber.slice(4, 7)}) ${phoneNumber.slice(
      7,
      10,
    )}-${phoneNumber.slice(10)}`;
  } else {
    return phoneNumber;
  }
}

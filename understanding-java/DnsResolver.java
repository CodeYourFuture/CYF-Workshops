import java.net.InetAddress;
import java.net.UnknownHostException;

class DnsResolver {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.printf("Expected exactly one argument, but got %d%n", args.length);
            System.exit(1);
        }
        String host = args[0];

        String[] parts = host.split("\\.");
        System.out.printf("The top-level domain of the host %s is %s%n", host, parts[parts.length - 1]);

        try {
            InetAddress[] ipAddresses = InetAddress.getAllByName(host);
            if (ipAddresses.length == 0) {
                System.out.printf("The host %s did not resolve to any IP addresses%n", host);
            } else {
                String pluralSuffix = ipAddresses.length == 1 ? "" : "es";
                System.out.printf("The host %s resolved to the following IP address%s:%n", host, pluralSuffix);
            }
            for (InetAddress ipAddress : ipAddresses) {
                System.out.println(ipAddress.getHostAddress());
            }
        } catch (UnknownHostException e) {
            System.err.printf("Failed to resolve %s: %s%n", host, e.getMessage());
            System.exit(1);
        }
    }
}

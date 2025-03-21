import java.io.*;
import java.net.*;

public class Servidor {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(54321);
        System.out.println("A porta 54321 foi aberta");
        System.out.println("Servidor esperando a mensagem do cliente");

        Socket socket = serverSocket.accept();
        System.out.println("Cliente conectado: " + socket.getInetAddress());

        DataInputStream entrada = new DataInputStream(socket.getInputStream());
        String mensagem = entrada.readUTF();
        String novaMensagem = mensagem.toUpperCase();

        DataOutputStream saida = new DataOutputStream(socket.getOutputStream());
        saida.writeUTF(novaMensagem);

        entrada.close();
        saida.close();
        socket.close();
        serverSocket.close();
    }
}

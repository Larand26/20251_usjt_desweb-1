import java.io.*;
import java.net.*;

public class Cliente{
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("127.0.0.1", 54321);
        DataOutputStream saida = new DataOutputStream(socket.getOutputStream());

       saida.writeUTF("Boa Noite");

       DataInputStream entrada = new DataInputStream(socket.getInputStream());

       String novaMensagem = entrada.readUTF();
       System.out.println(novaMensagem);

       entrada.close();
       saida.close();
       socket.close();
    }
}
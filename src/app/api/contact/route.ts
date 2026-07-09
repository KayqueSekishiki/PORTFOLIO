import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          success: false,
          message: "Resend API key not configured",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "Missing fields",
        },
        {
          status: 400,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <contatog@kayquesekishiki.dev>",
      to: "kayque.cunha.dev@gmail.com",
      subject,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>Novo contato pelo portfólio</h2>

          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>

          <hr>

          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: error.statusCode ?? 500,
        },
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}

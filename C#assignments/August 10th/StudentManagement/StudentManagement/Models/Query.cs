using Microsoft.Data.SqlClient;

namespace StudentManagement.Models
{
    public class Query
    {
        string connectionString = "server=localhost, 1401;database=School;user id=sa;password=Pass@word;" +
        "TrustServerCertificate=true";

        public int AddStudentDetails(Student student)
        {

            using SqlConnection con = new SqlConnection(connectionString);
            con.Open();

            string query = "AddStudent";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;


            SqlParameter paramName = new SqlParameter();
            paramName.ParameterName = "@StudName";
            paramName.Value = student.Name;
            paramName.SqlDbType = System.Data.SqlDbType.VarChar;
            paramName.Size = 25;

            SqlParameter paramAddress = new SqlParameter();
            paramAddress.ParameterName = "@StudAddress";
            paramAddress.Value = student.Address;
            paramAddress.SqlDbType = System.Data.SqlDbType.VarChar;
            paramAddress.Size = 35;

            SqlParameter paramClassName = new SqlParameter();
            paramClassName.ParameterName = "@StudClass";
            paramClassName.Value = student.Class;
            paramClassName.SqlDbType = System.Data.SqlDbType.VarChar;
            paramClassName.Size = 15;

            SqlParameter paramMark = new SqlParameter();
            paramMark.ParameterName = "@Mark";
            paramMark.Value = student.Mark;
            paramMark.SqlDbType = System.Data.SqlDbType.Decimal;

            SqlParameter paramReturn = new SqlParameter();
            paramReturn.SqlDbType = System.Data.SqlDbType.Int;
            paramReturn.Direction = System.Data.ParameterDirection.ReturnValue;

            cmd.Parameters.Add(paramName);
            cmd.Parameters.Add(paramAddress);
            cmd.Parameters.Add(paramClassName);
            cmd.Parameters.Add(paramMark);
            cmd.Parameters.Add(paramReturn);

            cmd.ExecuteNonQuery();

            con.Close();

            int retvalue = (int)paramReturn.Value;
            return retvalue;

        }
        //public List<Student> GetDetails()
        //{

        //    using SqlConnection con = new SqlConnection(connectionString);
        //    con.Open();

        //    string query = "GetStudentDetails";
        //    SqlCommand cmd = new SqlCommand(query);
        //    cmd.CommandText = query;
        //    cmd.Connection = con;
        //    cmd.CommandType = System.Data.CommandType.StoredProcedure;

        //    SqlDataReader reader = cmd.ExecuteReader();
        //    while (reader.Read())
        //    {
        //        for (int i = 0; i < reader.FieldCount; i++)
        //        {
        //            Console.WriteLine(reader[i]);
        //        }
        //        Console.WriteLine("\n");
        //    }
        //    con.Close();
        //    return students;
        //}

        public List<Student> GetDetails()
        {
            List<Student> students = new List<Student>();

            using SqlConnection con = new SqlConnection(connectionString);
            con.Open();

            string query = "GetStudentDetails";
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = query;
            cmd.Connection = con;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlDataReader reader = cmd.ExecuteReader();

            while(reader.Read())
            {
                Student obj = new Student();
             
                obj.Name = reader["Name"].ToString();
                obj.Address = reader["Address"].ToString();
                obj.Class = reader["Class"].ToString();
                obj.Mark = (decimal)reader["Mark"];

                students.Add(obj);
            }
            con.Close();
            return students;
        }

    }
}

using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp11
{
    public class Student
    {
        string connectionString = "server=localhost, 1401;database=School;user id=sa;password=Pass@word;" +
        "TrustServerCertificate=true";

        public int AddStudentDetails(string name, string address, string classname, double mark)
        {

            SqlConnection con = new SqlConnection(connectionString);
            con.Open();

            string query = "AddStudent";      
            SqlCommand cmd = new SqlCommand(); 
            cmd.CommandText = query;
            cmd.Connection = con;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;


            SqlParameter paramName = new SqlParameter();
            paramName.ParameterName = "@StudName";
            paramName.Value = name;
            paramName.SqlDbType = System.Data.SqlDbType.VarChar;
            paramName.Size = 25;

            SqlParameter paramAddress = new SqlParameter();
            paramAddress.ParameterName = "@StudAddress";
            paramAddress.Value = address;
            paramAddress.SqlDbType = System.Data.SqlDbType.VarChar;
            paramAddress.Size = 35;

            SqlParameter paramClassName = new SqlParameter();
            paramClassName.ParameterName = "@StudClass";
            paramClassName.Value = classname;
            paramClassName.SqlDbType = System.Data.SqlDbType.VarChar;
            paramClassName.Size = 15;

            SqlParameter paramMark = new SqlParameter();
            paramMark.ParameterName = "@Mark";
            paramMark.Value = mark;
            paramMark.SqlDbType = System.Data.SqlDbType.Decimal;

            SqlParameter paramReturn = new SqlParameter();           
            paramReturn.SqlDbType = System.Data.SqlDbType.Int;
            paramReturn.Direction = System.Data.ParameterDirection.ReturnValue;    

            cmd.Parameters.Add(paramName);
            cmd.Parameters.Add(paramAddress);
            cmd.Parameters.Add(paramClassName);
            cmd.Parameters.Add(paramMark);
            cmd.Parameters.Add(paramReturn);

            int count = cmd.ExecuteNonQuery();
            if (count > 0)
            {
                Console.WriteLine(count + " row inserted Sucessfully");

            }
            else
            {
                Console.WriteLine("Not inserted");
            }
            con.Close();

            int retvalue = (int)paramReturn.Value;
            return retvalue;

        }

        public void GetDetails()
        {

            SqlConnection con = new SqlConnection(connectionString);
            con.Open();

            string query = "GetStudentDetails";
            SqlCommand cmd = new SqlCommand(query);
            cmd.CommandText = query;
            cmd.Connection = con;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlDataReader reader = cmd.ExecuteReader();
            while(reader.Read())
            {
                for(int i=0;i<reader.FieldCount;i++)
                {
                    Console.WriteLine(reader[i]);
                }
                Console.WriteLine("\n");
            }
            con.Close();
        }
    }
}

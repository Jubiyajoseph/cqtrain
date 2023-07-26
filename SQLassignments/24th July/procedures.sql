
--create procedure for customer
CREATE PROCEDURE AddCustomer
@Customername VARCHAR(30),
@CustomerPhone BIGINT,
@CustomerEmail VARCHAR(20)
AS
BEGIN
   INSERT INTO CUSTOMER(Customername ,CustomerPhone ,CustomerEmail)
               VALUES(@Customername,@CustomerPhone ,@CustomerEmail)  
END 
GO
   EXECUTE AddCustomer 'Hashna',9480634389,'hashnaxx15@gmail.com';
   EXECUTE AddCustomer 'Josna',94896223453,'josxxx85@gmail.com';
   EXECUTE AddCustomer 'Ramshekar',9660634355,'ramxx06@gmail.com';
   EXECUTE AddCustomer 'Qalib',94596223444,'qalibxxx91@gmail.com';
GO


--create procedure for city
CREATE PROCEDURE AddCity
@CityName VARCHAR(30)
AS
BEGIN
     INSERT INTO CITY(CityName)
	        VALUES(@CityName)
END 
GO
   EXECUTE AddCity @CityName='Trivandrum'
   EXECUTE AddCity @CityName='Ernakulam'
   EXECUTE AddCity @CityName='Kollam'
   EXECUTE AddCity @CityName='Mumbai'
   EXECUTE AddCity @CityName='Delhi'
   EXECUTE AddCity @CityName='Pune'
   EXECUTE AddCity @CityName='Hyderabad'
   EXECUTE AddCity @CityName='Chennai'
   EXECUTE AddCity @CityName='Bangalore'
   EXECUTE AddCity @CityName='Kolkata'
GO


--create procedure for genre
CREATE PROCEDURE AddGenre
@GenreName VARCHAR(30)
AS 
BEGIN
   INSERT INTO GENRE(GenreName)
          VALUES(@GenreName)
   
END 
GO
   EXECUTE AddGenre @GenreName='Horror';
   EXECUTE AddGenre @GenreName='Comedy';
   EXECUTE AddGenre @GenreName='Action';
   EXECUTE AddGenre @GenreName='Drama';
   EXECUTE AddGenre @GenreName='Mystery';
   EXECUTE AddGenre @GenreName='Romantic';
   EXECUTE AddGenre @GenreName='Thriller';
   EXECUTE AddGenre @GenreName='Fantasy';
GO

--create procedure for language
CREATE or alter PROCEDURE AddLanguage
@LanguageName VARCHAR(30)
AS
BEGIN
   INSERT INTO LANGUAGE(LanguageName)
          VALUES(@LanguageName)

END
GO
   EXECUTE AddLanguage @LanguageName='English';
   EXECUTE AddLanguage @LanguageName='Malayalam';
   EXECUTE AddLanguage @LanguageName='Tamil';
   EXECUTE AddLanguage @LanguageName='Hindi';
   EXECUTE AddLanguage @LanguageName='Telugu';
   EXECUTE AddLanguage @LanguageName='Kannada';
   EXECUTE AddLanguage @LanguageName='Punjabi';
   EXECUTE AddLanguage @LanguageName='Marathi';
   EXECUTE AddLanguage @LanguageName='Bengali';
GO

--create procedure for seat_type
CREATE OR ALTER PROCEDURE AddSeatType
@SeatTypeName VARCHAR(20), 
@Seatprice DECIMAL(4,2)
AS
BEGIN
   INSERT INTO SEATTYPE(SeatTypeName, Seatprice) 
          VALUES(@SeatTypeName , @Seatprice)
END
GO
   EXECUTE AddSeatType 'Normal', 79.5;
   EXECUTE AddSeatType 'Executive',88.9;
   EXECUTE AddSeatType 'Premium',99.9;
GO


--create procedure for movie,moviegenre,movielanguage
CREATE TYPE EntityIds  AS TABLE              --tabletype EntityIds
(
  Id INT
)
GO
CREATE or alter PROCEDURE AddMovieGenreLanguage
@MovieTitle VARCHAR(60), 
@Duration TIME ,
@Releasedate DATE,
@MovieDescription VARCHAR(30),
@GenreId EntityIds READONLY,
@LanguageId EntityIds READONLY
AS
BEGIN
   INSERT INTO MOVIE(MovieTitle, Duration, Releasedate, MovieDescription) 
          VALUES(@MovieTitle, @Duration, @Releasedate, @MovieDescription)
   
   DECLARE @MovieID int = @@identity

   INSERT INTO MOVIEGENRE
   SELECT @MovieID,Id from @GenreId

   INSERT INTO MOVIELANGUAGE
   SELECT @MovieID,Id from @LanguageId
END

--for movie Oppenheimer
DECLARE @i EntityIds    --@i->table variable

INSERT INTO @i
SELECT 603
UNION ALL
SELECT 604
UNION ALL
SELECT 606

DECLARE @j EntityIds

INSERT INTO @j
SELECT 500
UNION ALL
SELECT 503


EXECUTE AddMovieGenreLanguage @MovieTitle='Oppenheimer',@Duration='03:00:00',@Releasedate='2023-07-20',
@MovieDescription='The film delves into Oppenheimers brilliance,and role in shaping the course of World War II.',
@GenreID= @i, @LanguageID=@j


go
--for movie BARBIE
DECLARE @i EntityIds

INSERT INTO @i
SELECT 603
UNION ALL
SELECT 601
UNION ALL
SELECT 607

DECLARE @j EntityIds

INSERT INTO @j
SELECT 500

EXECUTE AddMovieGenreLanguage @MovieTitle='Barbie',@Duration='01:45:00',@Releasedate='2023-07-21',
@MovieDescription='Barbie Land.',
@GenreID= @i, @LanguageID=@j

go
--for movie Maaveeran
DECLARE @i EntityIds

INSERT INTO @i
SELECT 602
UNION ALL
SELECT 606


DECLARE @j EntityIds

INSERT INTO @j
SELECT 502
UNION ALL
SELECT 501

EXECUTE AddMovieGenreLanguage @MovieTitle='Maaveeran',@Duration='02:50:00',@Releasedate='2023-06-14',
@MovieDescription='A cowardly cartoonist starts being `controlled` by a cartoon action figure.',
@GenreID= @i, @LanguageID=@j




----create procedure for theater,screen,seat
CREATE TYPE Screen AS TABLE
(
  ScreenName VARCHAR(30)
)
GO
CREATE TYPE Seat AS TABLE
(
  ScreenName VARCHAR(30),
  SeatTypeId INT 
)
GO       
CREATE OR ALTER PROCEDURE AddTheaterScreenSeat
@TheaterName VARCHAR(30),
@CityID INT,
@screens AS Screen READONLY,
@seats AS Seat READONLY
AS 
BEGIN
   INSERT INTO THEATER VALUES(@TheaterName,@CityID)
   declare @theatreID int = SCOPE_IDENTITY()

   DECLARE @data Table
   ( Id INT,
     [Name] varchar(30)
   )

   INSERT INTO Screen(ScreenName,TheaterID) 
   OUTPUT INSERTED.ScreenID,INSERTED.ScreenName INTO @data
   SELECT ScreenName,@theatreID FROM @screens
      
   INSERT INTO Seat(SeatTypeID,ScreenID)
   SELECT SeatTypeId,d.Id
   FROM @seats s 
   INNER JOIN @data d 
   ON d.Name = s.ScreenName 
END    


--for theater1-PVR
DECLARE @i Screen

INSERT INTO @i 
SELECT 'Gold screen'
UNION ALL 
SELECT 'Superplex'
UNION ALL
SELECT 'Playhouse'

DECLARE @j Seat

INSERT INTO @j (ScreenName,SeatTypeId)
SELECT 'Gold screen',1206
UNION ALL 
SELECT 'Gold screen',1206
UNION ALL 
SELECT 'Superplex',1208
UNION ALL 
SELECT 'Superplex',1208

EXEC AddTheaterScreenSeat @TheaterName='PVR',@CityID=200,@screens = @i,@seats = @j


--for theater2-KSN
go
DECLARE @i Screen

INSERT INTO @i (ScreenName)
SELECT 'Kairali'
UNION ALL 
SELECT 'Sree'
UNION ALL
SELECT 'Nila'

DECLARE @j Seat

INSERT INTO @j (ScreenName,SeatTypeId)
SELECT 'Kairali',1206
UNION ALL 
SELECT 'Kairali',1206
UNION ALL 
SELECT 'Nila',1207

EXEC AddTheaterScreenSeat @TheaterName='KSN',@CityID=200,@screens = @i,@seats = @j

--for theater3- VV COMPLEX
go
DECLARE @i Screen

INSERT INTO @i (ScreenName)
SELECT 'Vanitha'
UNION ALL 
SELECT 'Vineetha'

DECLARE @j Seat

INSERT INTO @j (ScreenName,SeatTypeId)
SELECT 'Vanitha',1206
UNION ALL 
SELECT 'Vanitha',1206

EXEC AddTheaterScreenSeat @TheaterName='VV COMPLEX',@CityID=201,@screens = @i,@seats = @j
go


--create procedure for show
   
CREATE OR ALTER PROCEDURE AddShow
 @ShowStartTime TIME,
 @ShowDate	DATE,
 @TheaterID INT,
 @ScreenID INT,
 @MovieLangID INT
 AS
 BEGIN
     INSERT INTO SHOW VALUES(@ShowStartTime, @ShowDate, @TheaterID ,@MovieLangID,@ScreenID) 

 END
 GO

--Oppenheimer english movie(700) in PVR(300) in Goldscreen(1000)
EXEC AddShow @ShowStartTime='18:30:00', @ShowDate='2023-07-20', @TheaterID='300' ,@MovieLangID='700',@ScreenID='1000'

--Oppenheimer english movie(700) in PVR(300) in Superplex(1001)
EXEC AddShow @ShowStartTime='18:00:00', @ShowDate='2023-07-20', @TheaterID='300' ,@MovieLangID='700',@ScreenID='1001'

--Barbie english movie(702) in PVR(300) in Playhouse(1002)
EXEC AddShow @ShowStartTime='18:00:00', @ShowDate='2023-07-20', @TheaterID='300' ,@MovieLangID='702',@ScreenID='1002'

--Maaveeran tamil movie(703) in theater KSN(301) in Screen Sree(1004)
EXEC AddShow @ShowStartTime='11:30:00', @ShowDate='2023-06-15', @TheaterID='301' ,@MovieLangID='703',@ScreenID='1004'

--Barbie english movie(702) in theater KSN(301) in Screen Kairali(1003)
EXEC AddShow @ShowStartTime='11:00:00', @ShowDate='2023-07-20', @TheaterID='301' ,@MovieLangID='702',@ScreenID='1003'

--Maaveeran tamil movie(704) in theater VV COMPLEX(302) in Screen Vanitha(1006)
EXEC AddShow @ShowStartTime='14:30:00', @ShowDate='2023-06-15', @TheaterID='302' ,@MovieLangID='704',@ScreenID='1006'

--Oppenheimer hindi movie(701) in theater VV COMPLEX(302) in Screen Vanitha(1006)
EXEC AddShow @ShowStartTime='14:30:00', @ShowDate='2023-07-22', @TheaterID='302' ,@MovieLangID='701',@ScreenID='1006'


--create procedure for PaymentMethod

CREATE PROCEDURE AddPayment
@PayMethodName VARCHAR(25)
AS
BEGIN
   INSERT INTO PAYMENTMETHOD VALUES(@PayMethodName)  
END
go
EXEC AddPayment 'UPI'
EXEC AddPayment 'Credit Card'
EXEC AddPayment 'Debit Card'


--create procedure for Booking

CREATE TYPE Ids AS TABLE
(
    ID INT
)
GO
CREATE or alter PROCEDURE AddBooking
@CustomerID INT,
@ShowID INT,
@Boookingdate DATE,
@PayMethodID INT,
@SeatID Ids READONLY
AS
BEGIN
   INSERT INTO BOOKING(CustomerID,ShowID,Boookingdate,TotalAmount)
		  SELECT @CustomerID,@ShowID,@Boookingdate ,SUM(Seatprice) 
		  FROM  @SeatID as i 
		  INNER JOIN SEAT s 
	          on i.ID =s.SeatID
		  INNER JOIN SEATTYPE st
              on s.SeatTypeID=st.SeatTypeID

   DECLARE @BookingID int = @@identity
   
   INSERT INTO BOOKEDSEAT(SeatId,BookingID)
   SELECT ID,@BookingID from @SeatID

   INSERT INTO PAYMENT(BookingID,PayMethodID)
   select @BookingID,@PayMethodID
END
GO

DECLARE @i Ids
INSERT INTO @i
SELECT 1302
UNION ALL
SELECT 1303

EXEC AddBooking @CustomerID=100,@ShowID=1101,@Boookingdate='2023-07-19',@PayMethodID=1600,@SeatID=@i
GO



--CREATE PROCEDURE FOR REVIEW

CREATE or alter PROCEDURE AddReview
@CustomerId	INT,
@MovieLangID INT,
@Review	VARCHAR(150)
AS
 BEGIN
      INSERT INTO REVIEW(CustomerId,MovieLangID,Review)
             VALUES(@CustomerId,@MovieLangID,@Review)

END
GO

EXEC AddReview @CustomerId=100,@MovieLangID=700,@Review='NICE MOVIE'



--proc for GetMoviesByLanguages , Place , Geners

create or alter PROC GetMoviesfortoday
@Genre EntityIds READONLY,
@Language EntityIds READONLY,
@CityID INT
AS
BEGIN
SELECT M.* FROM SHOW S
INNER JOIN MOVIELANGUAGE ML
  ON S.MovieLangID=ML.MovieLangID
INNER JOIN LANGUAGE L
  ON ML.LanguageID=L.LanguageID AND L.LanguageID IN(SELECT Id FROM @Language)
INNER JOIN MOVIE M
  ON M.MovieID=ML.MovieID
INNER JOIN MOVIEGENRE MG
  ON ML.MovieID=MG.MovieID AND MG.GenreID IN (SELECT Id FROM @Genre)
INNER JOIN THEATER T
  ON S.TheaterID=T.TheaterID
INNER JOIN CITY C
  ON T.CityID=C.CityID AND C.CityID= @CityID 
WHERE S.ShowDate= CAST(GETDATE() AS DATE)

END

DECLARE @G EntityIds
INSERT INTO @G
select 603


DECLARE @L EntityIds
INSERT INTO @L
SELECT 500

EXEC GetMoviesfortoday @Genre=@G,@Language=@L,@CityID=200
GO


--SP to GetShowDetails by MovieLanguage Id
CREATE OR ALTER PROC GetShowDetailsbyMovieLangID
@Mlang int
AS
BEGIN 
     SELECT * FROM SHOW WHERE MovieLangID=@Mlang

END

EXEC GetShowDetailsbyMovieLangID @Mlang=700
EXEC GetShowDetailsbyMovieLangID @Mlang=701
GO







--- sp to get booked ticket details
CREATE OR ALTER PROC GetBookedDetails
@bookid int
AS
BEGIN
  SELECT C.CustomerName,M.MovieTitle,T.TheaterName,S.ShowDate,S.ShowStartTime,
  B.TotalAmount,STYPE.SeatTypeName,BS.BookedSeatID,B.BookingID,B.Boookingdate
  FROM BOOKING B
  INNER JOIN SHOW S
    ON B.ShowID=S.ShowID
  INNER JOIN BOOKEDSEAT BS
    ON B.BookingID = BS.BookingID
  INNER JOIN SCREEN SC
    ON S.ScreenID=SC.ScreenID
  INNER JOIN SEAT SE
    ON SE.ScreenID=S.ScreenID
  INNER JOIN SEATTYPE STYPE
    ON SE.SeatTypeID=STYPE.SeatTypeID
  INNER JOIN THEATER T
    ON SC.TheaterID=T.TheaterID
  INNER JOIN MOVIELANGUAGE ML
    ON S.MovieLangID=ML.MovieLangID
  INNER JOIN MOVIE M
    ON M.MovieID=ML.MovieID
  INNER JOIN CUSTOMER C
    ON C.CustomerID=B.CustomerID
  WHERE B.BookingID=@bookid

END
go
EXEC GetBookedDetails @bookid=1402
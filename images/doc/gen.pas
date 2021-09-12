Var i, n :Integer;
begin
  ReadLn(n);
  For i:=0 to n do
    Begin
      if (i mod 4 = 0) and (i mod 3 = 0) then
      writeLn(i);

    end;
end.
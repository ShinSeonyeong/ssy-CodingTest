-- 코드를 입력하세요
-- select * from ANIMAL_INS
-- where NAME = 'Diablo' or NAME = 'Miller' or NAME = 'Cherokee'

select ANIMAL_ID, NAME from ANIMAL_INS
where INTAKE_CONDITION != 'Aged'
order by ANIMAL_ID asc;